import { Children, useEffect, useState } from "react"

export default function RichText({ src, maxWidth = '', className }) {

  const [nodes, setNodes] = useState(JSON.parse(src))

  useEffect(() => {
    console.log('rich text src', nodes)
  }, [src, nodes])
  return (
    <div className={className}>
      {nodes.map((node, index) => {
        const { type, children } = node
        if (type === 'paragraph') {
          if (children.length === 1 && children[0].text === '') return null

          return (
            <p key={`node_${index}`} className={maxWidth ? `max-w-[${maxWidth}]` : ''}>{children.map((childNode, childNodeIndex) => <span key={`node_${index}_childNode_${childNodeIndex}`}>{childNode.text}</span>)}</p>
          )
        }
      })}
    </div>
  )
}
