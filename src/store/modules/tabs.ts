import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { TabsActions, TabsMutations } from '@/constants/enum'
import { TabItem, Payload } from '@/constants/interfaces'

@Module({ namespaced: true })
export default class Tabs extends VuexModule {
  tabs: TabItem = {
    labels: [],
    items: [],
    active: 0,
  };

  @Mutation
  [TabsMutations.SET_LABEL](payload: Payload): void {
    const isExisting = this.tabs.labels.includes(payload.label)
    if (isExisting) return

    this.tabs.labels.push(payload.label)
    if (payload.active) {
      this.tabs.active = this.tabs.labels.length - 1
    }
  }

  @Mutation
  [TabsMutations.SET_ELEMENT](element: HTMLElement): void {
    this.tabs.items.push(element)
  }

  @Mutation
  [TabsMutations.SET_ACTIVE](index: number): void {
    this.tabs.active = index
  }

  @Action
  [TabsActions.UPDATE_LABEL](payload: Payload): void {
    this.context.commit(TabsMutations.SET_LABEL, payload)
  }

  @Action
  [TabsActions.UPDATE_ELEMENT](element: HTMLElement): void {
    this.context.commit(TabsMutations.SET_ELEMENT, element)
  }

  @Action
  [TabsActions.UPDATE_ACTIVE](index: number): void {
    this.context.commit(TabsMutations.SET_ACTIVE, index)
  }

  get tabsList(): TabItem {
    return this.tabs
  }
}
