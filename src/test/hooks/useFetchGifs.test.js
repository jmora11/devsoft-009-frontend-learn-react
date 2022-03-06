import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('use Fetch Gifs', () => {

    test('Debe retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Attack On Titan'))
        const { data, loading } = result.current;
        await waitForNextUpdate({ timeout: 3000 });
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });

    test('Debe retornar el estado luego que se carga', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Attack On Titan'))
        await waitForNextUpdate({ timeout: 3000 });
        const { data, loading } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();
    });

});