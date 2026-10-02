/**
 * Renders one or more JSON-LD blocks.
 *
 * `<` is escaped so a stray "</script>" inside any string value cannot close
 * the tag early. Everything else is plain JSON, which the HTML parser treats
 * as opaque text inside a script of this type.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];

  return (
    <>
      {blocks.map((block, index) => (
        <script
          // The blocks are a fixed list per page, so the index is stable.
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(block).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
