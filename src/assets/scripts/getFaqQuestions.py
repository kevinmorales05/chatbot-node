# csv file

def addCategory(list, value):
    for elemento in list:
        if elemento == value:
            # El value ya existe en la list, no se agrega de nuevo
            return
    # Si el bucle for termina sin encontrar el value, se agrega al final de la list
    list.append(value)

# "modules_cats_id","name","description","questions_cats_id","description","steps_cats_id","description","importantMessage"
f = open("./src/assets/scripts/FAQ.csv", "r")
questions_array = []
categories_ids = []
for x in f:
  #print(x)
  y = x.split(',')
  #print(y)
  questions_array.append(y)

print("The script starts now!")
print(questions_array[0][0])
for i in questions_array:
  id = i[0]
  quest = i[1]
  print(id)
  print(quest)
  addCategory(questions_array, id)

  
print(categories_ids[0])

#['3', 'Facturación', 'Datos fiscales y problemas al facturar.', '3', '¿Cómo generar tu factura electrónica?', '12', 'Con tu sesión iniciada en la App dirígete a la sección “Cuenta”.', '\n']
