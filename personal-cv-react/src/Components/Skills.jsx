import { useState } from "react";
function Skills() {
const [visible, setVisible] = useState(true);
return (
<section>
<button onClick={() => setVisible(!visible)}>
Show/Hide Skills
</button>
{visible && (
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<ul>
<li>Frontend</li>
</ul>
</ul>
)}
</section>
);
}
export default Skills;