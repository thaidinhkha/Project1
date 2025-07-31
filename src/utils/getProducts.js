import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

export async function getProducts() {
  try {
    const productsCol = collection(db, "Books");
    const productSnapshot = await getDocs(productsCol);

    if (productSnapshot.empty) {
      console.warn("Không tìm thấy sản phẩm nào trong Firestore.");
      return [];
    }

    const productList = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return productList;
  } catch (error) {
    console.error("Lỗi khi lấy sản phẩm từ Firestore:", error);
    return [];
  }
}
