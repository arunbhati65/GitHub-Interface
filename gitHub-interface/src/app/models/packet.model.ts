import { User } from "./user.model";

    export class Packet{
        public total_count?: number;
        public incomplete_results?: boolean;
        public items?:User[];
    }
    