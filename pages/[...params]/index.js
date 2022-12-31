import { useRouter } from "next/router";

export default function Articles() {
    const router = useRouter();
    const {params = []} = router.query;

    if(params.length === 1) {
        return (
            <h1>You are looking at articles in the year {params[0]}</h1>
        );
    } else if(params.length === 2) {
        return (
            <h1>You are looking at articles in the year {params[0]}, month {params[1]}</h1>
        );
    } else if(params.length === 3) {
        return (
            <h1>You are looking at articles in the year {params[0]}, day {params[2]} of month {params[1]}</h1>
        );
    } else if(params.length === 4) {
        return (
            <h1>You are looking at article #{params[3]}</h1>
        );
    }
    
    return (
        <h1>Wrong string query</h1>
    );
}