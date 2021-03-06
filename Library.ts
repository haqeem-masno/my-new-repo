interface Library {
    staff : Staff,
    member : Member,
    book : Book
    rent : Rent
}

interface Book {
    lending : Lending
}

interface Staff {
    membership? : Membership

}

interface Member {
    membership? : Membership
}

interface Membership {
    lending : Lending,
    rent : Rent
}

interface Lending {
    fine : Fine
}

interface Rent {
    room : Room,
    media : Media
}

class Fine {
    amount : number;
    description : string


}

class Room {
    roomId : string;
    date : string;
}

class Media {
    equipmentId : string;
    date : string;
}

