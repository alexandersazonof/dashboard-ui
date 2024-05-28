import { MenuItemInterface } from '../../models/menu-item.interface';

export enum MENU_ITEMS {
  USERS = 'Users',
  USER_STAT = 'User stats',
  USER_GENERAL_STAT = 'User general stats',
  NEW_USERS = 'New users',
  USERS_REF = 'Users ref',
  USERS_RATIO_EARN = 'Users ratio earn',
  HEROES = 'Heroes',
  HERO_STAT = 'Hero stats',
  HERO_DETAILS = 'Hero details',
  NEW_HEROES = 'Hero chart',
  ITEM_STAT = 'Item stats',
  STORY_STAT = 'Story stats',
  TOKENOMICS_STAT = 'Tokenomics stats',
  TOKENOMICS = 'Tokenomics',
  TOKENOMICS_CHART = 'Tokenomics chart',
  TOKENS_TRANSACTIONS = 'Token transactions',
  PAWNSHOP = 'Pawnshop',
  PAWNSHOP_CHART = 'Pawnshop chart',
  DAU_CHART = 'DAU',
  TX_CHART = 'Total transactions',
  CHURN_RATE = 'Churn rate',
}

export const MENU: { [key: string]: MenuItemInterface } = {
  [MENU_ITEMS.DAU_CHART]: {
    icon: 'line-chart',
    label: MENU_ITEMS.DAU_CHART,
  },
  [MENU_ITEMS.TX_CHART]: {
    icon: 'line-chart',
    label: MENU_ITEMS.TX_CHART,
  },
  [MENU_ITEMS.CHURN_RATE]: {
    icon: 'line-chart',
    label: MENU_ITEMS.CHURN_RATE,
  },
  [MENU_ITEMS.TOKENOMICS_STAT]: {
    icon: 'line-chart',
    label: MENU_ITEMS.TOKENOMICS_STAT,
    subMenu: {
      [MENU_ITEMS.TOKENOMICS]: {
        icon: 'line-chart',
        label: MENU_ITEMS.TOKENOMICS
      },
      [MENU_ITEMS.TOKENOMICS_CHART]: {
        icon: 'line-chart',
        label: MENU_ITEMS.TOKENOMICS_CHART
      },
      [MENU_ITEMS.TOKENS_TRANSACTIONS]: {
        icon: 'line-chart',
        label: MENU_ITEMS.TOKENS_TRANSACTIONS
      },
    }
  },
  [MENU_ITEMS.USERS]: {
    icon: 'line-chart',
    label: MENU_ITEMS.USERS,
    subMenu: {
      [MENU_ITEMS.USER_GENERAL_STAT]: {
        icon: 'line-chart',
        label: MENU_ITEMS.USER_GENERAL_STAT
      },
      [MENU_ITEMS.USER_STAT]: {
        icon: 'line-chart',
        label: MENU_ITEMS.USER_STAT
      },
      [MENU_ITEMS.NEW_USERS]: {
        icon: 'line-chart',
        label: MENU_ITEMS.NEW_USERS
      },
      [MENU_ITEMS.USERS_REF]: {
        icon: 'line-chart',
        label: MENU_ITEMS.USERS_REF
      },
      [MENU_ITEMS.USERS_RATIO_EARN]: {
        icon: 'line-chart',
        label: MENU_ITEMS.USERS_RATIO_EARN
      },
    }
  },
  [MENU_ITEMS.HEROES]: {
    icon: 'line-chart',
    label: MENU_ITEMS.HEROES,
    subMenu: {
      [MENU_ITEMS.HERO_STAT]: {
        icon: 'line-chart',
        label: MENU_ITEMS.HERO_STAT
      },
      [MENU_ITEMS.NEW_HEROES]: {
        icon: 'line-chart',
        label: MENU_ITEMS.NEW_HEROES
      },
    }
  },
  [MENU_ITEMS.PAWNSHOP]: {
    icon: 'line-chart',
    label: MENU_ITEMS.PAWNSHOP,
    subMenu: {
      [MENU_ITEMS.PAWNSHOP_CHART]: {
        icon: 'line-chart',
        label: MENU_ITEMS.PAWNSHOP_CHART
      },
    }
  },
  [MENU_ITEMS.ITEM_STAT]: {
    icon: 'line-chart',
    label: MENU_ITEMS.ITEM_STAT,
  },
  [MENU_ITEMS.STORY_STAT]: {
    icon: 'line-chart',
    label: MENU_ITEMS.STORY_STAT,
  }
};