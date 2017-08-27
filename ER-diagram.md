[Users|first_name|last_name|address|city|state|zip|phone|email|admin]
[Cars|make|model|year|color|initial_mileage|price_bought|current_mileage]
[Reservations|user_id|car_id|start_time|end_time]

[Reservations]<-[Users]
[Reservations]<-[Cars]
