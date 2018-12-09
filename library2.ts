interface Library {
    staff : Staff;
    member : Member;
    book : Book;
    rent : Rent;
}

interface Book {
    title : string;
    author : string;
    yearPublication : string;
    publisher : string;
    lending : Lending;
}

interface Staff {
    name : string;
    position : string;
    address : string;
    ic : string;
    membership? : Membership;

}

interface Member {
    ic : string;
    name : string;
    address : string;
    membership? : Membership;
}

interface Membership {
    memberId : string;
    lending : Lending;
    rent : Rent;
}

interface Lending {
    dateCheckin : string;
    dateCheckout : string;
    fine : Fine;
}

interface Rent {
    room : Room;
    media : Media;
}

class Fine {
    amount : number;
    description : string;


}

class Room {
    roomId : string;
    date : string;
}

class Media {
    equipmentId : string;
    date : string;
}

