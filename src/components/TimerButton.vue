<template>
    <div class="mask mask-circle bg-gradient-to-br from-[#0E112A] to-[#2E325A] shadow-3xl">
        <div
            class="radial-progress bg-base-100 text-primary border-[13px] border-base-100 m-4"
            style="
            --value:100;
            --size: 23rem;
            --thickness: 12px;
            "
            role="progressbar">
            <div class="text-secondary-content grid gap-5 place-items-center">
                <span class="countdown text-8xl tracking-[-5px]">
                    <span style="--value:00;"></span>:
                    <span style="--value:00;"></span>
                </span>
                <button class="ml-4 uppercase tracking-[15px]">restart</button>
            </div>
        </div>
    </div>    
</template>