import { db } from '@/lib/firebase';
import { User } from '@/types';
import { collection, getDocs } from 'firebase/firestore';

const COLLECTION_NAME = 'Users';

export const getUsers = async (): Promise<User[] | null> => {
  try {
    const qs = await getDocs(collection(db, COLLECTION_NAME));
    return qs.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      email: doc.data().email,
    }));
  } catch (error) {
    console.error(error);
    return null;
  }
};
