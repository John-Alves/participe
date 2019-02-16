import { Injectable } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  colors = {
    primary: "#ff9800",
    secondary: "#4caf50",
    tertiary: "#03a9f4",
    success: "#10dc60",
    warning: "#ffce00",
    danger: "#f04141",
    dark: "#222428",
    medium: "#989aa2",
    light: "#f4f5f8"
  }
  constructor(private statusBar: StatusBar) { }

  getColor(color: string){
    return this.colors.hasOwnProperty(color) ? this.colors[color] : "#fff"
  }


  changeStatusBarColor(color = 'primary'){
    // let status bar overlay webview
    this.statusBar.overlaysWebView(true);

    var sb_color = this.getColor(color)

    // set status bar to white
    this.statusBar.backgroundColorByHexString(sb_color);
  }
}
