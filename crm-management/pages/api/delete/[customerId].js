import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
      message: "Error in connecting to Database",
    });
    return;
  }
  if (req.method === "DELETE") {
    const id = req.query.customerId;
    try {
      await Customer.deleteOne({ _id: id });
      res.status(200).json({
        status: "Success",
        message: "Data deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "Failed",
        message: "Error in deleting data from Database",
      });
      return;
    }
  }
}
