import { createContext, ReactNode, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  UserCredential,
  User,
} from "firebase/auth";
import { auth } from "../config/firebase.config";


export const AuthContext = createContext<AuthContextType | null>(null);
// typescript props
export type AuthContextType = {
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signInUser: (email: string, password: string) => Promise<UserCredential>;
  user: User | null;
  googleLogin: () => Promise<UserCredential>;
  handleUpdateProfile: (name: string, photo: string) => Promise<void>;
  logOut: () => Promise<void>;
  isLoading: boolean;
};

type ProviderProps = {
  children: ReactNode;
};

// google provider
const googleProvider = new GoogleAuthProvider();

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // sign Up user
  const createUser = (email: string, password: string) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign In user
  const signInUser = (email: string, password: string) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //  user profile update by async function
  const handleUpdateProfile = async (name: string, photo: string) => {
    try {
      setIsLoading(true);

      const currentUser = auth.currentUser;

      if (!currentUser) {
        throw new Error("User not authenticated");
      }

      await updateProfile(currentUser, {
        displayName: name,
        photoURL: photo,
      });

      setIsLoading(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
      setIsLoading(false);
      throw error;
    }
  };
  // user logOut
  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };
  //  google signIn
  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // side effect for user data
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo: AuthContextType = {
    createUser,
    signInUser,
    user,
    googleLogin,
    handleUpdateProfile,
    logOut,
    isLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
