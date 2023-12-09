const DrinkLayout = ({ children }) => {
    return (
        <div className="max-w-xl">
            <div className="mockup-code mb-8">   
                <pre data-prefix="$">
                    <code className="language-js">
                        $ npx create-next-app@latest nextjs-tutorial
                    </code>
                </pre>
            </div>
            {children}
        </div>
    );
}
export default DrinkLayout;
