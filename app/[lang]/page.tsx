import { redirect } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const HomePage = () => {
	redirect("/auth/login");
};

export default HomePage;
