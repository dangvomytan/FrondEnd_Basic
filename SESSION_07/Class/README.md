<!-- === Ex_ 01 ====================================== -->

BEGIN
    INPUT Math, Physics, Chemistry
    Average = (Math + Physics + Chemistry) / 3
    DISPLAY Average
END

<!-- === Ex_ 02 ====================================== -->

BEGIN
    INPUT Dollar
    Money = Dollar * 23000
    DISPLAY Money
END

<!-- === Ex_ 03 ====================================== -->

BEGIN
    INPUT A, B, C
    IF A > B 
        IF A > C
            DISPLAY A
        ELSE
            DISPLAY C
    ELSE
        IF B > C
            DISPLAY B
        ELSE
            DISPLAY C
    END IF
END


END

<!-- === Ex_ 04 ====================================== -->

<!-- C1 -->

BEGIN
    INPUT n
    INPUT A1,A2,...An
    Max = A1
    i = 1
    WHILE (i <= n)
        DO
            IF Ai > Max
                Ai=Max
                i = i + 1
            END IF
        END DO
    END WHILE
    DISPLAY Max
END

<!-- C2 -->

BEGIN
    INPUT n
    INPUT A1,A2,...An
    Max = A1
    i=1
    START LOOP
    IF i <= N
        IF Ai > Max
            Max = Ai
        END IF
        i=i+1
    END IF
    DISPLAY Max
END

<!-- === Ex_ 05 ====================================== -->

BEGIN
    INPUT Point
    IF Point >= 75
        DISPLAY Type A
    ELSE
        IF Point >= 60
            DISPLAY Type B
        ELSE
            IF Point >=45
                DISPLAY Type C
            ELSE
                IF point >=35
                    DISPLAY Type D
                ELSE
                    DISPLAY Type E
END


    
