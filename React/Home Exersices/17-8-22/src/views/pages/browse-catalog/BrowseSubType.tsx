import BrowseSubTypeTitle from "./BrowseSubTypeTitle";

interface BrowseSubType {
    type: string,
    backType: string
}

const BrowseSubType = ({ type, backType }: BrowseSubType) => {
    return (
        <div className="browse-subtype">
            <BrowseSubTypeTitle type={type} backType={backType}/>
        </div>
    );
}

export default BrowseSubType;