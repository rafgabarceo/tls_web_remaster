import { useRouter } from "next/router";

export default function Section() {
    const router = useRouter();
    const sectionName = router.query.sectionName;
    return (
        <h1>You're looking at articles in {sectionName}</h1>
    );
}