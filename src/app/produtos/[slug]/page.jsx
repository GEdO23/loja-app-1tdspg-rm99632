import React from "react"

export default function ProdutoSlug({params}) {
  return (
    <div>
        <h1>Produto Slug</h1>
        <p>Valor do parâmetro passado na URL : {params.slug}</p>

    </div>
  )
}