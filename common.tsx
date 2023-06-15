import { ReactNode, useCallback } from "react";

function RecursiveDiv({
  deep,
  children,
}: {
  deep: number;
  children?: ReactNode;
}) {
  const callback = useCallback(() => {
    console.log("click");
  }, []);

  if (deep > 0) {
    return (
      <div data-deep={deep} onClick={callback}>
        <RecursiveDiv deep={deep - 1}>{children}</RecursiveDiv>
      </div>
    );
  }

  return <>{children}</>;
}

export function App() {
  return (
    <html>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Test Application</title>
      </head>
      <body>
        <RecursiveDiv deep={250}>
          <h1>Hello</h1>
        </RecursiveDiv>

        <RecursiveDiv deep={250}>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            veritatis dolore aut natus, ab voluptates nemo ea maxime quibusdam
            ducimus tempore vitae a voluptatem voluptatum earum optio qui.
            Dolorem, in.
          </article>
        </RecursiveDiv>

        <RecursiveDiv deep={250}>
          <img
            src='https://loremflickr.com/240/240?random=17'
            alt='some image'
          />
        </RecursiveDiv>

        <RecursiveDiv deep={250}>
          <input type='text' placeholder='stub' />
        </RecursiveDiv>

        <RecursiveDiv deep={250}>
          <button type='button'>Submit</button>
        </RecursiveDiv>

        <RecursiveDiv deep={250}>
          <canvas></canvas>
        </RecursiveDiv>

        <RecursiveDiv deep={250}>
          <address>Екатеринбург, ул. Черняховского, 86/8</address>
        </RecursiveDiv>

        <RecursiveDiv deep={250}>
          <footer>Copyright {new Date().getFullYear()}</footer>
        </RecursiveDiv>
      </body>
    </html>
  );
}
