import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function GuruCard({ img, name, position, socials }) {
    return (
        <Card color="transparent" shadow={false} className="text-center items-center">
            <Avatar
                src={img}
                alt={name}
                size="lg"
                variant="circular"
                className="h-[100px] w-[100px] object-cover object-top shadow-lg shadow-gray-500/25"
            />
            <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
                {name}
            </Typography>
            {position && (
                <Typography className="font-normal text-blue-gray-500">
                    {position}
                </Typography>
            )}
            {socials && <div className="mx-auto mt-5">{socials}</div>}
        </Card>
    );
}

GuruCard.defaultProps = {
    position: "",
    socials: null,
};

GuruCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string,
    socials: PropTypes.node,
};

GuruCard.displayName = "/src/widgets/layout/team-card.jsx";

export default GuruCard;
