import { useEffect } from "react";
import useAxiousPublic from "../../Hooks/useAxiousPublic";
import { useState } from "react";
import { Button, Card } from "keep-react";
import { MapPinLine } from "phosphor-react";

const AllPublisher = () => {
    const axiousPublic = useAxiousPublic();
    const [publishers, setPublishers] = useState([]);
    useEffect(() => {
        axiousPublic.get("/publisher")
            .then(res => setPublishers(res.data))
    }, [axiousPublic])

    return (
        <div>
            <h2>All Publisher</h2>
            <div className="flex gap-6">
                {publishers.map(publisher => <Card key={publisher._id} publisher={publisher}
                    className="!max-w-xs overflow-hidden rounded-md md:!max-w-[478px]"
                    imgSrc={publisher?.logo}
                    imgSize="md"
                    horizontal={true}>
                    <Card.Container className="space-y-4 p-6">
                        <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">
                            <span>{publisher.name}</span>
                        </Card.Title>
                        <Card.Container className="my-3 flex items-center justify-between">
                            <Card.Title className="text-body-3 flex items-center font-medium text-metal-500">
                                <MapPinLine size={20} color="#5E718D" />
                                {publisher.address}</Card.Title>
                        </Card.Container>
                    </Card.Container>
                </Card>)}
            </div>
        </div>
    );
};

export default AllPublisher;

