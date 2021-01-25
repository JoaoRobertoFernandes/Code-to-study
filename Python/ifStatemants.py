#If statemants 

'''
#Using if and else
#---------------------------------#
print("---------------------------")
if_use = False;
if if_use:
    print("Using if statemants!")
else:
    print("Using else!")
print("---------------------------")
#---------------------------------#
'''

'''
#Using or inside if statements! 
#---------------------------------#
is_dog = True
is_cat = True
if is_dog or is_cat:
    print("It's a dog or cat")#Need at least one true
else:
    print("It's not a dog or a cat")#Both false
print("---------------------------")
#---------------------------------#
'''

'''
#Using "and" inside if statemants!
is_dog = True
is_cat = True
if is_cat and is_dog:
    print("It's a hybrid")#Two truths 
elif is_dog and not(is_cat):
    print("It's a dog")#is_dog == true & is_cat == false
else:
    print("Wtf dude, bakemono")#Both false
'''