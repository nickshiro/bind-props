# React example

```tsx
import type { FC } from "react";
import clsx from "clsx";
import bindProps from "bind-props-react";

interface ButtonProps {
    color: "red" | "blue";
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({ color, ...props }) => {
    const classes = clsx(
        "rounded-lg",
        color === "red" ? "bg-red-200" : "bg-blue-200"
    );
    return <button className={classes} {...props} />;
};

const RedButton = bindProps(Button, { color: "red" });

export const App = () => {
    return (
        <div>
            <RedButton onClick={() => console.log("Red button clicked!")} />
        </div>
    );
};
```
