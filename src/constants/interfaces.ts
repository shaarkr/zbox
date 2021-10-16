export interface TabItem {
  labels: string[]
  items: HTMLElement[]
  active: number
}

export interface Payload {
  label: string
  active: boolean
}

export interface SectionCardType {
  id: number
  icon: string
  message: string
  status: string
}
