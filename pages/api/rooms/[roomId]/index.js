import { ObjectId } from "mongodb";
import { authenticatedAction } from "../../../../utils/api";
import { initDatabase } from "../../../../utils/mongodb";

async function deleteRoom(roomId) {
  const client = await initDatabase();
  const rooms = client.collection("rooms");

  const query = {
    _id: ObjectId(roomId),
  };

  const result = await rooms.deleteOne(query);

  if (!result.deletedCount) {
    throw {
      status: 404,
      message: "Room not found",
    };
  }
}

async function performAction(req, user) {
  const { roomId } = req.query;

  if (user.role !== "admin") {
    throw { status: 403 };
  }

  switch (req.method) {
    case "DELETE":
      return deleteRoom(roomId);
  }

  throw { status: 405 };
}

export default authenticatedAction(performAction);
