 npx react-native run-ios --simulator="iPhone 14 Pro Max"

 cd ios
 rm -rf ~/Library/Caches/CocoaPods
rm -rf Pods
rm -rf ~/Library/Developer/Xcode/DerivedData/*
pod deintegrate
pod update