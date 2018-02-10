
import { connect } from "skype-http";

export class SkypeClient {
    connect(username, password) {
        return connect({credentials: {username: username, password: password}}); 
    }
    
}