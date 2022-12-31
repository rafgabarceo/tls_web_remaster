import { useRouter } from "next/router";

export default function Articles() {
    const router = useRouter();
    const {params = []} = router.query;

    // Make sure that string query is a number (int) first and foremost
    if(!params.every(param => Number.isInteger(parseInt(param)))) {
        return (
            <h1>String query needs to be a number</h1>
        );
    }

    // So THIS is AI...
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
    
    // Else, query does not exist
    return (
        <h1>String query does not exist</h1>
    );
}