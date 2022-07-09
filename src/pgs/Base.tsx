import { Video } from "./Video";

export function Base(){
    return(
        <div className="base center">
            <div className="video">
                <Video/>
            </div>
            <div className="menu"></div>
        </div>
    )
}