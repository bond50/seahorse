import {useEffect, useState} from 'react';

const ScrollTop = () => {
    const [visible, setVisible] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    useEffect(() => {
        function toggleVisibility() {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [scrollToTop]);


    let classes = [`scroll-top d-flex align-items-center justify-content-center`];
    if (visible) {
        classes.push(`active`);
    }

    return (
        <div onClick={scrollToTop} className={classes.join(' ')}><i
            className="bi bi-arrow-up-short"/>
        </div>
    );
};

export default ScrollTop;