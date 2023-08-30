import Document,{Head ,Html, Main, NextScript} from "next/document";


class Mydocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head/>
                <body>
                    <div id="overlays" /> 
                    <Main></Main>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default Mydocument