import { Button, Card } from "keep-react";
import { CheckCircle } from "phosphor-react";

const Plans = () => {
    return (
        <div>
            Plans
            <div>
                <Card className="max-w-xs p-6">
                    <Card.Container>
                        <Card.Container className="h-[60px] w-[60px] bg-primary-25 flex items-center justify-center rounded-full">
                            {/* <Image
                                src="/images/icon/pricing.png"
                                height={24}
                                width={24}
                                alt="card"
                            /> */}
                        </Card.Container>
                        <Card.Container>
                            <Card.Title className="text-body-2 font-medium text-primary-500">
                                Business
                            </Card.Title>
                            <Card.Title className="flex items-center my-3">
                                <span className="text-heading-4 font-bold text-metal-800">$79</span>
                                <span className="ml-1 text-body-4 font-medium text-metal-400">
                                    / mth
                                </span>
                            </Card.Title>
                            <Card.Description className="text-body-4 text-metal-700">
                                Until recently, the prevailing view assumed.
                            </Card.Description>
                        </Card.Container>
                        <Card.Container tag="ul" className="my-4 space-y-5">
                            <Card.List className="flex items-center gap-1.5">
                                <CheckCircle size={24} color="#1B4DFF" />
                                <span className="text-body-4 text-metal-700">
                                    One Month Free Access
                                </span>
                            </Card.List>
                            <Card.List className="flex items-center gap-1.5">
                                <CheckCircle size={24} color="#1B4DFF" />
                                <span className="text-body-4 text-metal-700">
                                    All The Component Access
                                </span>
                            </Card.List>
                            <Card.List className="flex items-center gap-1.5">
                                <CheckCircle size={24} color="#1B4DFF" />
                                <span className="text-body-4 text-metal-700">
                                    Access Html Component
                                </span>
                            </Card.List>
                            <Card.List className="flex items-center gap-1.5">
                                <CheckCircle size={24} color="#1B4DFF" />
                                <span className="text-body-4 text-metal-700">
                                    Access React Component
                                </span>
                            </Card.List>
                        </Card.Container>
                        <Card.Container>
                            <Button type="primary" width="full">
                                Pro Access
                            </Button>
                        </Card.Container>
                    </Card.Container>
                </Card>
            </div>
        </div>
    );
};

export default Plans;