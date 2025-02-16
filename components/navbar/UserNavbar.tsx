import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/components/ui/avatar';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Link from 'next/link';

interface Props {
	email: string;
	name: string;
	userImage?: string | undefined;
}

export const UserNavbar = ({ name, userImage, email }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='relative h-10 w-10 rounded-full'
				>
					<Avatar className='h-10 w-10'>
						<AvatarImage src={userImage} alt={name} />
						<AvatarFallback>{name?.slice(0, 3)}</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56' align='end' forceMount>
				<DropdownMenuLabel className='font-normal'>
					<div className='flex flex-col space-y-1'>
						<p className='text-sm font-medium leading-none'>{name}</p>
						<p className='text-xs leading-none text-muted-foreground'>
							{email}
						</p>
					</div>
				</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link href='/sell'>Vender tu producto</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href='/settings'>Configuración</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href='/my-products'>Mis Productos</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href='/billing'>Facturación</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem asChild>
					<LogoutLink>Cerrar sesión</LogoutLink>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
