/// <reference types="@tarojs/taro" />

declare namespace Taro {
  interface AppConfig {
    pages: string[];
    window?: {
      backgroundTextStyle?: string;
      navigationBarBackgroundColor?: string;
      navigationBarTitleText?: string;
      navigationBarTextStyle?: string;
    };
  }

  interface PageConfig {
    navigationBarTitleText?: string;
  }
}
