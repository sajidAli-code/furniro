import Product from "@/models/Products";
import ConnectDB from "@/utils/ConnectDB";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await ConnectDB();

        // Get query parameters for pagination
        const params = request.nextUrl.searchParams;
        let limit = params.get('limit'); // Only limit parameter from the frontend

        // Default value for limit
        limit = limit ? parseInt(limit) : 10; // Default to 10 products per page if no limit is provided

        // Ensure limit is valid
        if (isNaN(limit) || limit < 1) {
            return NextResponse.json({ message: "Invalid limit parameter" }, { status: 400 });
        }

        // Get the total number of products
        const totalProducts = await Product.countDocuments();

        // Calculate totalPages based on total products and limit
        const totalPages = Math.ceil(totalProducts / limit);

        // Calculate the page number based on the total number of products and limit
        const pageNumber = params.get('page') ? parseInt(params.get('page')) : 1; // Default to page 1 if no page is provided
        const skip = (pageNumber - 1) * limit;

        // Aggregation pipeline for pagination and price calculation
        const data = await Product.aggregate([
            {
                $addFields: {
                    newPrice: {
                        $cond: {
                            if: { $gt: ["$off", 0] },
                            then: {
                                $subtract: [
                                    "$price",
                                    { $multiply: ["$price", { $divide: ["$off", 100] }] }
                                ]
                            },
                            else: "$price"
                        }
                    }
                }
            },
            // Skip the documents based on the page number
            { $skip: skip },
            // Limit the number of documents based on the specified limit
            { $limit: limit }
        ]);

        // Prepare response with data and pagination information
        const response = {
            data,
            pagination: {
                total: totalProducts,
                page: pageNumber,
                totalPages,
                limit
            }
        };

        return NextResponse.json(response, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}