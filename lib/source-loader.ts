import { docs } from "@/.source"
import { loader } from "fumadocs-core/source"

function create() {
  return loader({
    baseUrl: "/docs",
    source: docs.toFumadocsSource(),
  })
}

// Create a single source instance that is reused
// This prevents circular references and stack overflow issues
let _source: ReturnType<typeof create> | null = null

export function getSource() {
  if (!_source) _source = create()
  return _source
}
