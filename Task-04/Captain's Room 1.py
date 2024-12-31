
K = int(input()) 
room_list = list(map(int, input().split())) 

room_count = {}
for room in room_list:
    if room in room_count:
        room_count[room] += 1
    else:
        room_count[room] = 1

for room, count in room_count.items():
    if count == 1:
        print(room)
        break
