(ns app-front.init
    (:require [app-front.core :as core]
              [app-front.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
