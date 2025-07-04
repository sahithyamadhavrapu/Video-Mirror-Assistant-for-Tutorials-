import cv2

def flip_video(input_path, output_path):
    cap = cv2.VideoCapture(input_path)
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, 30.0, (640, 360))

    while True:
        ret, frame = cap.read()
        if not ret:
            break
        flipped = cv2.flip(frame, 1)
        out.write(flipped)

    cap.release()
    out.release()
