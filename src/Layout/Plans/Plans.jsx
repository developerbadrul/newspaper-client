import { Button, Card } from "keep-react";
import { CheckCircle } from "phosphor-react";
import freeIcon from "../../assets/img/free.png"
import premiumIcon from "../../assets/img/premium.png"

const Plans = () => {
    return (
        <div className="my-6">
            <h2 className="text-2xl font-bold text-center text-cyan-500 my-5 underline">Plans</h2>
            <div className="flex gap-7 items-center justify-center">
                <div>
                    <Card className="max-w-xs p-6">
                        <Card.Container>
                            <Card.Container className="h-[60px] w-[60px] bg-primary-25 flex items-center justify-center rounded-full">
                                <img src={freeIcon} alt="" />
                            </Card.Container>
                            <Card.Container>
                                <Card.Title className="text-body-2 font-medium text-primary-500">
                                    Free
                                </Card.Title>
                                <Card.Title className="flex items-center my-3">
                                    <span className="text-heading-4 font-bold text-metal-800">$79</span>
                                    <span className="ml-1 text-body-4 font-medium text-metal-400">
                                        / mth
                                    </span>
                                </Card.Title>
                                <Card.Description className="text-body-4 text-metal-700">
                                    Provide different levels of access based on their subscription tier.
                                </Card.Description>
                            </Card.Container>
                            <Card.Container tag="ul" className="my-4 space-y-5">
                                <Card.List className="flex items-center gap-1.5">
                                    <CheckCircle size={24} color="#1B4DFF" />
                                    <span className="text-body-4 text-metal-700">
                                        Allow users to choose different payment plans (monthly, quarterly, yearly).                                </span>
                                </Card.List>
                                <Card.List className="flex items-center gap-1.5">
                                    <CheckCircle size={24} color="#1B4DFF" />
                                    <span className="text-body-4 text-metal-700">
                                        Provide discounts for longer subscription commitments.                                </span>
                                </Card.List>
                                <Card.List className="flex items-center gap-1.5">
                                    <CheckCircle size={24} color="#1B4DFF" />
                                    <span className="text-body-4 text-metal-700">
                                        Choose how they want to be notified (email, push notifications, etc.).                                </span>
                                </Card.List>

                            </Card.Container>
                            <Card.Container>
                                <Button type="primary" width="full">
                                    Pro Access
                                </Button>
                            </Card.Container>

                        </Card.Container>
                        <Button className="bg-cyan-500 w-full round-lg font-bold text-white">Subcribe</Button>
                    </Card>
                </div>
                <div>
                    <Card className="max-w-xs p-6">
                        <Card.Container>
                            <Card.Container className="h-[60px] w-[60px] bg-primary-25 flex items-center justify-center rounded-full">
                                <img src={premiumIcon} alt="" />
                            </Card.Container>
                            <Card.Container>
                                <Card.Title className="text-body-2 font-medium text-primary-500">
                                    Premium
                                </Card.Title>
                                <Card.Title className="flex items-center my-3">
                                    <span className="text-heading-4 font-bold text-metal-800">$79</span>
                                    <span className="ml-1 text-body-4 font-medium text-metal-400">
                                        / mth
                                    </span>
                                </Card.Title>
                                <Card.Description className="text-body-4 text-metal-700">
                                    Provide different levels of access based on their subscription tier.
                                </Card.Description>
                            </Card.Container>
                            <Card.Container tag="ul" className="my-4 space-y-5">
                                <Card.List className="flex items-center gap-1.5">
                                    <CheckCircle size={24} color="#1B4DFF" />
                                    <span className="text-body-4 text-metal-700">
                                        Allow users to choose different payment plans (monthly, quarterly, yearly).                                </span>
                                </Card.List>
                                <Card.List className="flex items-center gap-1.5">
                                    <CheckCircle size={24} color="#1B4DFF" />
                                    <span className="text-body-4 text-metal-700">
                                        Provide discounts for longer subscription commitments.                                </span>
                                </Card.List>
                                <Card.List className="flex items-center gap-1.5">
                                    <CheckCircle size={24} color="#1B4DFF" />
                                    <span className="text-body-4 text-metal-700">
                                        Choose how they want to be notified (email, push notifications, etc.).                                </span>
                                </Card.List>

                            </Card.Container>
                            <Card.Container>
                                <Button type="primary" width="full">
                                    Pro Access
                                </Button>
                            </Card.Container>
                        </Card.Container>
                        <Button className="bg-cyan-500 w-full round-lg font-bold text-white">Subcribe</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Plans;