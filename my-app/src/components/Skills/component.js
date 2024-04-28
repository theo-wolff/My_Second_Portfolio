import { motion, useMotionValue, useTransform } from "framer-motion";
import "./Skills.css"

export function Component(props) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [60, -60]);
    const rotateY = useTransform(x, [-100, 100], [-60, 60]);

    return (
        <div className='skill-item'>
            <motion.div>
                <motion.img
                style={{
                    position: "relative",
                    x,
                    y,
                    rotateX,
                    rotateY,
                    cursor: "grab"
                }}
                drag
                dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                dragElastic={1}
                whileTap={{ cursor: "grabbing" }}
                whileHover={{scale:1.4, transition:{stiffness:200, type:"spring", damping: 7}}}
            className="skills-img" src = {props.image}></motion.img>
        </motion.div>
        </div>
    );
}