import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getCategoryList = async () => {
  return await getDocs(collection(db, "Category"));
};
