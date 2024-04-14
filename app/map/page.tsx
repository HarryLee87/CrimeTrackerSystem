import { Map } from "@/components/googlemap/GoogleMap";

export default function MapPage() {
    return(
        <div className="flex flex-row justify-center items-center">
            <div className="w-4/6">
                <Map />
            </div>
            <div className="flex flex-col justify-center items-center w-1/4 h-screen">
                <div className="h-1/2 w-full border">
                    sorting
                </div>
                <div className="h-1/2 w-full border">
                    bookmarks
                </div>
            </div>
        </div>
    )
}