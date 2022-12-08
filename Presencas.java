package somativa1;

import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.Scanner;

public class Presencas {
	public static void main(String[] args) throws IOException, ClassNotFoundException {
		String nome = "C:\\mundas app\\eclipse\\presenca.bin";
		Estudante [] estudante = assinarListaPresenca();	
		guardarLista(estudante);
		guardarListaObjectos(estudante);
		lerListaObjecto(nome);
	}
	public static Estudante [] assinarListaPresenca(){
		Estudante[] alunos = new Estudante[5];
		for(byte i=0; i<alunos.length;i++){
			System.out.println("Registe o nome do "+(i+1)+"o estudante: ");
			Estudante estudante= new Estudante();
			alunos[i]= estudante;
		}
		return alunos;
	}
	public static void guardarLista(Estudante alunos[]) throws IOException{
		String str="";
		FileWriter fw = new FileWriter("C:\\mundas app\\eclipse\\presenca.txt");
		BufferedWriter br = new BufferedWriter(fw);
		for(byte i =0 ; i<alunos.length;i++ ){
			br.write(str.valueOf(alunos[i]));
			br.newLine();
		}
		br.close();
		fw.close();
		
	}
	public static void guardarListaObjectos(Estudante alunos[]) throws IOException{
		FileOutputStream fs = new FileOutputStream("C:\\mundas app\\eclipse\\presenca.bin");
		ObjectOutputStream object = new ObjectOutputStream(fs);
		//Estudante estudante = (Estudante) object.readO
		for(byte i =0; i<alunos.length;i++){
			object.writeObject(alunos[i]);
		}
		fs.close();
		object.close();
	}
	public static void lerListaObjecto(String nome) throws IOException, ClassNotFoundException{
		try{
			FileInputStream fsi = new FileInputStream(nome);
			ObjectInputStream object = new ObjectInputStream(fsi);
			Estudante alunos[] = new Estudante[5];
			for(byte i=0; i<5; i++){
				Estudante estudante = (Estudante) object.readObject();
				alunos[i]=estudante;
				System.out.println(alunos[i]);
			}
		
		fsi.close();
		object.close();
		}catch(Exception e){
			System.out.println(e);
		}
		
		
	}
}
