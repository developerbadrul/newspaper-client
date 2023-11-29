/* eslint-disable react/prop-types */

const Container = ({children}) => {
    return (
        <div className="w-11/12 md:mx-auto">
            {children}
        </div>
    );
};

export default Container;