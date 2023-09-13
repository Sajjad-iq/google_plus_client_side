import { CollectionsDef, def } from "../../../../Context/GlobalContext";
import { UserDef } from "../../../../services/LocalStorage/UserData";

export const SearchDef = {
    Accounts: [UserDef],
    Posts: [def],
    Collections: [CollectionsDef],
    Communities: [],
}