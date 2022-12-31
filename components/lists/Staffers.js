import Staffer from "../list-items/Staffer";

export default function Staffers({staffers}) {
    const staffersListItems = staffers.map(staffer => <Staffer staffer={staffer}/>);
    
    return (
        <ul>
            {staffersListItems}
        </ul>
    );

}